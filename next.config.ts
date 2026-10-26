import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/apps", destination: "/applicaties", permanent: true },
      { source: "/faq", destination: "/veelgestelde-vragen", permanent: true },
      { source: "/installation-guides", destination: "/installatiegidsen", permanent: true },
      { source: "/installation-guides/:path*", destination: "/installatiegidsen/:path*", permanent: true },
      { source: "/privacy-policy", destination: "/privacybeleid", permanent: true },
      { source: "/refund-policy", destination: "/retourbeleid", permanent: true },
      { source: "/dmca-policy", destination: "/dmca-beleid", permanent: true },
      { source: "/terms", destination: "/voorwaarden", permanent: true },
      { source: "/renew", destination: "/verlengen", permanent: true },
      { source: "/thank-you", destination: "/bedankt", permanent: true },
      { source: "/channels", destination: "/kanalen", permanent: true },
      { source: "/subscriptions", destination: "/prijzen", permanent: true },
      { source: "/why-us", destination: "/over-ons", permanent: true },

      {
        source: "/checkout/1mes",
        destination:
          "https://checkout.paygate.sbs/process-payment.php?address=2rhJMEuL625xtG392%2B9zB4xZ8cp%2F71aN0h3bWm9gIse1DoJR2PqmGH31OGjmPLsVlknC4xqQIzJiaxke9gBb6A%3D%3D&amount=11&provider=banxa&email=mustapha.2003.arab%40gmail.com&currency=EUR",
        permanent: false,
      },
      {
        source: "/checkout/6meses",
        destination:
          "https://meldcrypto.com/?publicKey=WGtfQDvEVHeBW8HQkyejDb:2mCz6gKyTSyhfYPUgUEGUXaeEiSHP9LUt4t&destinationCurrencyCodeLocked=POL&walletAddressLocked=0x21D4e51Fd24A579ce153799856A951a599CE11F1&sourceCurrencyCodeLocked=EUR&sourceAmountLocked=32&countryCodeLocked=NL",
        permanent: false,
      },
      {
        source: "/checkout/1ano",
        destination:
          "https://meldcrypto.com/?publicKey=WGtfQDvEVHeBW8HQkyejDb:2mCz6gKyTSyhfYPUgUEGUXaeEiSHP9LUt4t&destinationCurrencyCodeLocked=POL&walletAddressLocked=0xE35073eb6309CdeC787E0924FD61F83b8dab3738&sourceCurrencyCodeLocked=EUR&sourceAmountLocked=45&countryCodeLocked=NL",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
