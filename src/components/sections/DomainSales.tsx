import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Shield, Zap, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Domain {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  features: string[];
}

export default function DomainSales() {
  const { t } = useLanguage();
  
  // Your actual domain data
  const domains: Domain[] = [
    {
      id: '1',
      name: 'vislab.ai',
      price: '$14,000',
      description: t('vislabDesc'),
      category: 'AI Premium',
      features: ['AI Vision', 'Tech Premium', 'High Value']
    },
    {
      id: '2',
      name: 'qhh.ai',
      price: '$2,400',
      description: t('qhhDesc'),
      category: 'AI Short',
      features: ['3-Character', 'AI Domain', 'Brandable']
    }
  ];

  const handlePayPalPayment = (domain: Domain) => {
    // Your actual PayPal payment link
    const paypalLink = 'https://paypal.me/rujingai?locale.x=zh_XC&country.x=C2';
    window.open(paypalLink, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('premiumDomains')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('premiumDomainsDesc')}
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="mr-2" size={16} />
              {t('secureTransfer')}
            </div>
            <div className="flex items-center">
              <Zap className="mr-2" size={16} />
              {t('fastProcessing')}
            </div>
            <div className="flex items-center">
              <Globe className="mr-2" size={16} />
              {t('globalReach')}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {domains.map((domain) => (
            <Card key={domain.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{domain.category}</Badge>
                  <span className="text-2xl font-bold text-blue-600">{domain.price}</span>
                </div>
                <CardTitle className="text-xl text-gray-800 break-all">
                  {domain.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {domain.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-gray-700">{t('keyFeatures')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {domain.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => handlePayPalPayment(domain)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <div className="flex items-center justify-center">
                    <svg 
                      className="w-5 h-5 mr-2" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a.565.565 0 0 0-.13.292c-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81.464.53.756 1.122.874 1.807z"/>
                    </svg>
                    {t('payWithPayPal')}
                  </div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-6 bg-blue-50 border-blue-200">
            <div className="flex items-center justify-center mb-4">
              <Shield className="text-blue-600 mr-2" size={24} />
              <h3 className="text-lg font-semibold text-blue-800">{t('securePaymentProcess')}</h3>
            </div>
            <p className="text-blue-700 mb-4">
              {t('securePaymentText')}
            </p>
            <div className="flex items-center justify-center text-sm text-blue-600">
              <ExternalLink size={16} className="mr-1" />
              <span>{t('protectedByPayPal')}</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}