import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, MessageCircle, ExternalLink, Copy } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  // Your actual contact information
  const contactInfo = {
    email: 'airujing@gmail.com',
    github: 'AirujingPayPal',
    wechat: '13278673377'
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
      toast({
        title: t('copied'),
        description: `${type} copied to clipboard`,
      });
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('getInTouch')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('getInTouchDesc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="text-blue-600" size={24} />
              </div>
              <CardTitle className="text-xl">{t('email')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4 break-all">
                {contactInfo.email}
              </p>
              <div className="space-y-2">
                <Button
                  onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
                  className="w-full"
                  variant="outline"
                >
                  <Mail size={16} className="mr-2" />
                  {t('sendEmail')}
                </Button>
                <Button
                  onClick={() => copyToClipboard(contactInfo.email, 'Email')}
                  className="w-full"
                  variant="ghost"
                  size="sm"
                >
                  <Copy size={14} className="mr-2" />
                  {copiedEmail ? t('copied') : t('copyEmail')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Github className="text-gray-700" size={24} />
              </div>
              <CardTitle className="text-xl">GitHub</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4 break-all">
                @{contactInfo.github}
              </p>
              <div className="space-y-2">
                <Button
                  onClick={() => window.open(`https://github.com/${contactInfo.github}`, '_blank')}
                  className="w-full"
                  variant="outline"
                >
                  <Github size={16} className="mr-2" />
                  {t('viewProfile')}
                </Button>
                <Button
                  onClick={() => copyToClipboard(`https://github.com/${contactInfo.github}`, 'GitHub URL')}
                  className="w-full"
                  variant="ghost"
                  size="sm"
                >
                  <Copy size={14} className="mr-2" />
                  {t('copyUrl')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <CardTitle className="text-xl">WeChat</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4 break-all">
                {contactInfo.wechat}
              </p>
              <div className="space-y-2">
                <Button
                  onClick={() => copyToClipboard(contactInfo.wechat, 'WeChat ID')}
                  className="w-full"
                  variant="outline"
                >
                  <MessageCircle size={16} className="mr-2" />
                  {t('copyWeChatId')}
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  {t('addMeOnWeChat')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t('letsWorkTogether')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {t('letsWorkTogetherText')}
              </p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <ExternalLink size={14} className="mr-1" />
                <span>{t('respondsWithin24Hours')}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}