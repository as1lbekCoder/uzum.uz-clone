import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import '../i18n' // i18next instance import qilinishi shart

export const LanguageToggle = () => {
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()

    const handleChange = (lang: 'uz' | 'ru') => {
        i18n.changeLanguage(lang)

        const segments = location.pathname.split('/')
        if (['uz', 'ru'].includes(segments[1])) {
            segments[1] = lang
        } else {
            segments.unshift('', lang)
        }
        const newPath = segments.join('/')
        navigate(newPath)
    }

    return (
        <div className="flex gap-2">
            {['uz', 'ru'].map((lang) => (
                <Button
                    key={lang}
                    variant={i18n.language === lang ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleChange(lang as 'uz' | 'ru')}
                    className='cursor-pointer'
                >
                    {lang === 'uz' ? "O'zbek" : lang === 'ru' && 'Русский'}
                </Button>
            ))}
        </div>
    )
}
