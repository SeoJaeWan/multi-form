const pxToRem = (px) => `${px / 16}rem`;

export const px0_20 = Array.from({ length: 21 }, (_, i) => pxToRem(i));

export const px0_200 = Array.from({ length: 201 }, (_, i) => pxToRem(i));
