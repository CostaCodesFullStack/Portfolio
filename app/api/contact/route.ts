import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  getEmailConfig,
  generateEmailSubject,
  getDestinationEmail,
} from '@/lib/config';

// Validação de email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validação de dados do formulário
const validateFormData = (data: any) => {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Nome deve ter pelo menos 2 caracteres');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Email deve ser válido');
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Assunto deve ter pelo menos 3 caracteres');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres');
  }

  return errors;
};

// Configuração do transporter de email
const createTransporter = () => {
  const emailConfig = getEmailConfig();

  return nodemailer.createTransport({
    service: emailConfig.service,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    // Configurar CORS para Vercel
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      'https://portfolio-one-gold-6xch6vskv8.vercel.app',
      'http://localhost:3000',
      'https://localhost:3000',
    ];

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { success: false, message: 'Origem não permitida' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validar dados
    const validationErrors = validateFormData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Dados inválidos',
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    // Verificar se as variáveis de ambiente estão configuradas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Variáveis de ambiente de email não configuradas');
      return NextResponse.json(
        {
          success: false,
          message: 'Serviço de email não configurado',
        },
        { status: 500 }
      );
    }

    // Obter configurações de email
    const emailConfig = getEmailConfig();
    const destinationEmail = getDestinationEmail();

    // Criar transporter
    const transporter = createTransporter();

    // Configurar email
    const mailOptions = {
      from: emailConfig.from,
      to: destinationEmail, // Usar email centralizado
      replyTo: email,
      subject: generateEmailSubject(subject),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nova mensagem do portfólio - ${emailConfig.destination}
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
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    // Log para debug (remover em produção)
    console.log('Email enviado com sucesso:', {
      from: email,
      subject: subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso!',
      },
      {
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Erro interno do servidor. Tente novamente mais tarde.',
      },
      { status: 500 }
    );
  }
}

// Método OPTIONS para CORS
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    'https://portfolio-one-gold-6xch6vskv8.vercel.app',
    'http://localhost:3000',
    'https://localhost:3000',
  ];

  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigins.includes(origin || '')
        ? origin || '*'
        : 'https://portfolio-one-gold-6xch6vskv8.vercel.app',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}

// Método GET para verificar se a API está funcionando
export async function GET() {
  return NextResponse.json({
    message: 'API de contato funcionando',
    timestamp: new Date().toISOString(),
    site: 'https://portfolio-one-gold-6xch6vskv8.vercel.app',
  });
}
