'use client';
import en from '@/assets/lang/en';
import vi from '@/assets/lang/vi';

export let statusLang = 'en';

export const useTrans = () => {
  let trans = en;
  let localLang = 'en';
  if (typeof window !== 'undefined') {
    localLang = localStorage.getItem('lang')?.toString() || 'en';
    trans = localLang === 'vi' ? vi : en;
  }
  statusLang = localLang === 'vi' ? 'vi' : 'en';
  return trans;
};

export const setTrans = (lang: 'vi' | 'en') => {
  statusLang = lang;
  localStorage.setItem('lang', lang);
};
