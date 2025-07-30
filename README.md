This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

hamzatalha77

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Redouan

<form id="cod-order-form" style="max-width: 450px; margin: auto;" novalidate>
  <style>
    .cod-label {
      font-weight: 500;
      display: block;
      margin-bottom: 0.3rem;
    }
    .cod-label .required-star {
      color: red;
      margin-left: 3px;
    }
    .cod-input {
      width: 100%;
      padding: 1rem;
      margin-bottom: 0.3rem;
      border: 2px solid #ccc;
      border-radius: 6px;
    }
    .error-message {
      color: red;
      font-size: 0.85rem;
      margin-bottom: 0.75rem;
      display: none;
    }
    .cod-submit {
      width: 100%;
      padding: 15px;
      font-size: 1.5rem;
      letter-spacing: .1rem;
      background: #EDD76F;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      margin-top: 8px;
    }
    .cod-submit.loading {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .cod-submit.loading::after {
      content: '⏳';
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
    .cod-success {
      display: none;
      margin-top: 1rem;
      color: green;
      font-weight: bold;
    }
    #total-price {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  </style>

  <div id="total-price">Total: ...</div>

<label class="cod-label" for="name">Nom et Prénom<span class="required-star">\*</span></label>
<input type="text" id="name" class="cod-input" placeholder="écris ton nom complet">

  <div class="error-message" id="name-error">Ce champ est requis</div>

<label class="cod-label" for="phone">Téléphone<span class="required-star">\*</span></label>
<input type="tel" id="phone" class="cod-input" placeholder="écris ton numéro de téléphone">

  <div class="error-message" id="phone-error">Le numéro doit contenir uniquement des chiffres (pas de +, -, etc.)</div>

<label class="cod-label" for="city">Ville<span class="required-star">\*</span></label>
<input type="text" id="city" class="cod-input" placeholder="écris ta ville">

  <div class="error-message" id="city-error">Ce champ est requis</div>

<label class="cod-label" for="email">E-mail</label>
<input type="email" id="email" class="cod-input" placeholder="écris ton email (optionnel)">

  <div class="error-message" id="email-error" style="display:none;"></div>

<button type="submit" class="cod-submit" id="submit-button">Acheter maintenant</button>

  <div id="cod-success" class="cod-success">✅ Votre commande a été envoyée !</div>
</form>

<form id="cod-order-form" style="max-width: 450px; margin: auto;">
  <style>
    .cod-label {
      font-weight: 500;
      display: block;
      margin-bottom: 0.3rem;
    }
    .cod-input {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
      border: 2px solid #ccc;
      border-radius: 6px;
    }
    .cod-submit {
      width: 100%;
      padding: 15px;
      font-size: 1.5rem;
      letter-spacing: .1rem;
      background: #EDD76F;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .cod-success {
      display: none;
      margin-top: 1rem;
      color: green;
      font-weight: bold;
    }
    #total-price {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  </style>

  <div id="total-price">Total: ...</div>

<label class="cod-label" for="name">Nom et Prénom</label>
<input type="text" id="name" class="cod-input" placeholder='écris ton nom complet' required>

<label class="cod-label" for="phone">Téléphone</label>
<input type="tel" id="phone" class="cod-input" placeholder='écris ton numéro de téléphone' required>

<label class="cod-label" for="city">Ville</label>
<input type="text" id="city" class="cod-input" placeholder='écris ta ville' required>

<label class="cod-label" for="email">E-mail</label>
<input type="email" id="email" class="cod-input" placeholder='écris ton email' 
 required>

<button type="submit" class="cod-submit">Acheter maintenant</button>

  <div id="cod-success" class="cod-success">✅ Votre commande a été envoyée !</div>
</form>

<script>
  const form = document.getElementById('cod-order-form');
  const success = document.getElementById('cod-success');
  const totalPriceEl = document.getElementById('total-price');

  const getPrice = () => {
    const priceText = document.querySelector('.price__sale .price-item--sale, .price__regular .price-item--regular')?.innerText.trim();
    const priceValue = priceText?.replace(/[^\d.]/g, '');
    return parseFloat(priceValue || '0');
  };

  const updateTotal = () => {
    const quantity = parseInt(document.querySelector('input[name="quantity"]')?.value || '1');
    const unitPrice = getPrice();
    const total = unitPrice * quantity;
    totalPriceEl.textContent = `Total: ${total.toFixed(2)} MAD`;
  };

  document.querySelector('input[name="quantity"]')?.addEventListener('input', updateTotal);
  updateTotal(); 

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value.trim();
    const email = document.getElementById('email').value.trim();

    const quantity = parseInt(document.querySelector('input[name="quantity"]')?.value || '1');
    const unitPrice = getPrice();
    const total = unitPrice * quantity;
    const productTitle = document.querySelector('a.product__title h2.h1')?.innerText.trim() || "Produit inconnu";
    const productURL = window.location.href;
    const orderNumber = "COD-" + Date.now();

    // ✅ Get variant tex
    const selectedVariantEl = document.querySelector('variant-selects legend span[data-selected-value]');
    const variantLabel = selectedVariantEl?.parentNode?.childNodes[0]?.textContent?.trim().replace(':', '');
    const variantValue = selectedVariantEl?.textContent?.trim();
    const variant = variantLabel && variantValue ? `${variantLabel}: ${variantValue}` : "Aucune";

    // ✅ WhatsApp Message
    const message =
      `🛒 Nouvelle commande:\n` +
      `Commande: ${orderNumber}\n` +
      `Produit: ${productTitle}\n` +
      `Variante: ${variant}\n` +
      `Quantité: ${quantity}\n` +
      `Total: ${total.toFixed(2)} MAD\n` +
      `Lien: ${productURL}\n` +
      `Prénom: ${name}\n` +
      `Téléphone: ${phone}\n` +
      `Ville: ${city}\n` +
      `Email: ${email}`;

    // ✅ Google Sheets
    const sheetURL = "https://script.google.com/macros/s/AKfycbx49i5LjRhg4eZk0Y8l5TJ7aMH2fMhXLiyQldk53j4YgFd04BFFaTstlRZq-hgCPLaoAg/exec";
    fetch(sheetURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderNumber,
        productTitle,
        variant,
        quantity,
        total: `${total.toFixed(2)} MAD`,
        productURL,
        name,
        phone,
        city,
        email
      })
    });

    // ✅ WhatsApp
    const whatsappNumber = "212642130727";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    success.style.display = "block";
    form.reset();
    updateTotal();
  });
</script>
