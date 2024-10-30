import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';

export default defineConfig({
  html: {
    template: "./public/index.html",
  },
  plugins: [pluginReact(), pluginImageCompress()],
  
});
