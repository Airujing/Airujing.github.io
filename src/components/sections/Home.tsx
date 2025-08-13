import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Git',
    'Web Development', 'Domain Investment', 'UI/UX Design'
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            AR
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Airujing
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {t('developer')}
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-500 mb-8">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{t('location')}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{t('availableForProjects')}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Github className="mr-2" size={20} />
                {t('aboutMe')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                {t('aboutMeText')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('skillsAndTech')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('currentFocus')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t('currentFocusText')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('interests')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t('interestsText')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('goals')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t('goalsText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}