/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module 'next' {
  interface NextConfig {
    experimental?: {
      optimizePackageImports?: string[];
    };
  }
}
