import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Validação de email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validação de dados do formulário
const validateFormData = (data: any) => {
  const errors: string[] = []
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Nome deve ter pelo menos 2 caracteres')
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Email deve ser válido')
  }
  
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Assunto deve ter pelo menos 3 caracteres')
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres')
  }
  
  return errors
}

// Configuração do transporter de email
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // ou outro provedor
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validar dados
    const validationErrors = validateFormData(body)
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Dados inválidos',
          errors: validationErrors 
        },
        { status: 400 }
      )
    }

    // Verificar se as variáveis de ambiente estão configuradas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Variáveis de ambiente de email não configuradas')
      return NextResponse.json(
        { 
          success: false, 
          message: 'Serviço de email não configurado' 
        },
        { status: 500 }
      )
    }

    // Criar transporter
    const transporter = createTransporter()

    // Configurar email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Enviar para o próprio email
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nova mensagem do portfólio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Informações do contato:</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Assunto:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p>Esta mensagem foi enviada através do formulário de contato do portfólio.</p>
            <p>Responda diretamente para: ${email}</p>
          </div>
        </div>
      `,
      text: `
Nova mensagem do portfólio

Nome: ${name}
Email: ${email}
Assunto: ${subject}

Mensagem:
${message}

---
Esta mensagem foi enviada através do formulário de contato do portfólio.
Responda diretamente para: ${email}
      `
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    // Log para debug (remover em produção)
    console.log('Email enviado com sucesso:', {
      from: email,
      subject: subject,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso!'
    })

  } catch (error) {
    console.error('Erro ao enviar email:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro interno do servidor. Tente novamente mais tarde.' 
      },
      { status: 500 }
    )
  }
}

// Método GET para verificar se a API está funcionando
export async function GET() {
  return NextResponse.json({
    message: 'API de contato funcionando',
    timestamp: new Date().toISOString()
  })
}
