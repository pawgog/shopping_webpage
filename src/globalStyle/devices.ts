const size = {
  sm: '480px',
  md: '780px',
  lg: '970px',
  xl: '1200px'
};

export const deviceMinWidth = (Object.keys(size) as Array<keyof typeof size>).reduce((acc, key) => {
  acc[key] = (style: TemplateStringsArray) => `@media (min-width: ${size[key]}) { ${style} }`;
  return acc;
}, {} as { [index: string]: (style: TemplateStringsArray) => string });

export const deviceMaxWidth = (Object.keys(size) as Array<keyof typeof size>).reduce((acc, key) => {
  acc[key] = (style: TemplateStringsArray) => `@media (max-width: ${size[key]}) { ${style} }`;
  return acc;
}, {} as { [index: string]: (style: TemplateStringsArray) => string });
