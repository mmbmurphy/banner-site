import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Subscriber type
export interface Subscriber {
  id?: string;
  email: string;
  company_name: string;
  created_at?: string;
  source?: string;
}

// Personal email domains to block
const personalEmailDomains = [
  // Google
  'gmail.com',
  'googlemail.com',
  // Yahoo
  'yahoo.com',
  'yahoo.co.uk',
  'yahoo.ca',
  'yahoo.com.au',
  'ymail.com',
  'rocketmail.com',
  // Microsoft
  'hotmail.com',
  'hotmail.co.uk',
  'outlook.com',
  'outlook.co.uk',
  'live.com',
  'live.co.uk',
  'msn.com',
  // Apple
  'icloud.com',
  'me.com',
  'mac.com',
  // AOL
  'aol.com',
  'aim.com',
  // ProtonMail
  'protonmail.com',
  'protonmail.ch',
  'proton.me',
  'pm.me',
  // Other common providers
  'mail.com',
  'email.com',
  'zoho.com',
  'zohomail.com',
  'yandex.com',
  'yandex.ru',
  'gmx.com',
  'gmx.net',
  'gmx.de',
  'inbox.com',
  'fastmail.com',
  'fastmail.fm',
  'tutanota.com',
  'tutanota.de',
  'tutamail.com',
  'hushmail.com',
  'mailinator.com',
  'guerrillamail.com',
  'tempmail.com',
  '10minutemail.com',
  'rediffmail.com',
  'qq.com',
  '163.com',
  '126.com',
  'sina.com',
  'att.net',
  'sbcglobal.net',
  'verizon.net',
  'comcast.net',
  'cox.net',
  'charter.net',
  'earthlink.net',
  'juno.com',
  'netzero.net',
  'bellsouth.net',
  'optonline.net',
];

export function isPersonalEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  return personalEmailDomains.includes(domain);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Lazy initialization of Supabase client
let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase credentials not configured');
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
}

// For backwards compatibility
export const supabase = {
  from: (table: string) => getSupabase().from(table),
};
