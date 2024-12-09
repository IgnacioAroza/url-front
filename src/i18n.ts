import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Your shortened URLs": "Your shortened URLs",
            "Logout": "Logout",
            "Loading URLs...": "Loading URLs...",
            "Short URL": "Short URL",
            "Original URL": "Original URL",
            "Copy short URL": "Copy short URL",
            "Open original URL": "Open original URL",
            "You haven't shortened any URLs yet": "You haven't shortened any URLs yet",
            "Enter your URL": "Enter your URL",
            "Shorten URL": "Shorten URL",
            "URL Shortener": "URL Shortener",
            "Short URL copied to clipboard!": "Short URL copied to clipboard!",
            "Original URL copied to clipboard!": "Original URL copied to clipboard!",
            "Error loading user URLs": "Error loading user URLs",
            "URL shortened successfully!": "URL shortened successfully!",
            "Error shortening URL": "Error shortening URL",
            "Session closed successfully": "Session closed successfully",
            "Error closing session": "Error closing session",
            "Username": "Username",
            "Enter username": "Enter username",
            "Email": "Email",
            "Enter email": "Enter email",
            "Password": "Password",
            "Login": "Login",
            "Register": "Register",
            "No account?": "No account?",
            "Already have an account?": "Already have an account?",
            "Create your account": "Create your account",
            "Sign in to your account": "Sign in to your account",
            "Registration successful!": "Registration successful!",
            "Error registering. Please try again.": "Error registering. Please try again.",
            "Login successful!": "Login successful!",
            "Error logging in. Please check your credentials.": "Error logging in. Please check your credentials."
        }
    },
    es: {
        translation: {
            "Your shortened URLs": "Tus URLs acortadas",
            "Logout": "Cerrar sesión",
            "Loading URLs...": "Cargando URLs...",
            "Short URL": "URL corta",
            "Original URL": "URL original",
            "Copy short URL": "Copiar URL corta",
            "Open original URL": "Abrir URL original",
            "You haven't shortened any URLs yet": "No has acortado ninguna URL todavía",
            "Enter your URL": "Ingresa tu URL",
            "Shorten URL": "Acortar URL",
            "URL Shortener": "Acortador de URLs",
            "Short URL copied to clipboard!": "¡URL corta copiada al portapapeles!",
            "Original URL copied to clipboard!": "¡URL original copiada al portapapeles!",
            "Error loading user URLs": "Error al cargar las URLs del usuario",
            "URL shortened successfully!": "¡URL acortada con éxito!",
            "Error shortening URL": "Error al acortar la URL",
            "Session closed successfully": "Sesión cerrada exitosamente",
            "Error closing session": "Error al cerrar sesión",
            "Username": "Nombre de usuario",
            "Enter username": "Ingrese nombre de usuario",
            "Email": "Correo electrónico",
            "Enter email": "Ingrese correo electrónico",
            "Password": "Contraseña",
            "Login": "Iniciar sesión",
            "Register": "Registrarse",
            "No account?": "¿No tienes cuenta?",
            "Already have an account?": "¿Ya tienes cuenta?",
            "Create your account": "Crea tu cuenta",
            "Sign in to your account": "Inicia sesión en tu cuenta",
            "Registration successful!": "¡Registro exitoso!",
            "Error registering. Please try again.": "Error al registrarse. Por favor, inténtalo de nuevo.",
            "Login successful!": "¡Inicio de sesión exitoso!",
            "Error logging in. Please check your credentials.": "Error al iniciar sesión. Por favor, verifica tus credenciales."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;