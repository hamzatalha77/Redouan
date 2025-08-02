<script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("custom-order-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const variantId = formData.get("id");

    if (!variantId || variantId === "undefined") {
      alert("Erreur : l'identifiant de la variante est manquant !");
      return;
    }

    const payload = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      variant_id: variantId
    };

    try {
      const response = await fetch("https://script.google.com/macros/s//exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.success) {
        alert("Commande envoyée avec succès !");
        form.reset();
      } else {
        alert("Erreur lors de l'envoi de la commande.");
        console.error(result);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("Erreur réseau lors de l'envoi du formulaire.");
    }
  });
});
</script>
