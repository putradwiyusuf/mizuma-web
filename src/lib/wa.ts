export const generateWA = (productName: string) => {
  const message = `Halo MIZUMA, saya tertarik dengan ${productName}, bisa dibantu rekomendasinya?`
  return `https://wa.me/6285603007707?text=${encodeURIComponent(message)}`
}