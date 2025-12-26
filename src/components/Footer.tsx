export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          &copy; {currentYear} <strong>Rich Hudson</strong> / Web Developer - New Hampshire. All Rights Reserved.
          {' • '}
          <a
            href="/privacy-policy"
            className="text-green-600 hover:underline font-medium"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}