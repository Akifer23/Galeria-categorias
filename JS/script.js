document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const selectedList = document.getElementById("selected-products");
    const sendBtn = document.getElementById("send-btn");
    const vendorPhone = "524651142491"; // Número de WhatsApp del vendedor
    let selectedProducts = [];
  
    // Actualiza la lista de productos seleccionados
    const updateSelectedList = () => {
      selectedList.innerHTML = ""; // Limpia la lista
      selectedProducts.forEach(productName => {
        const li = document.createElement("li");
        li.textContent = productName;
        selectedList.appendChild(li);
      });
  
      // Habilita o deshabilita el botón de enviar
      send.disabled = selectedProducts.length === 0;
    };
  
    // Manejo de selección de productos
    products.forEach(product => {
      product.addEventListener("click", () => {
        const productName = product.getAttribute("data-product");
  
        if (selectedProducts.includes(productName)) {
          // Deseleccionar producto
          selectedProducts = selectedProducts.filter(item => item !== productName);
          product.classList.remove("selected");
        } else {
          // Seleccionar productoa
          selectedProducts.push(productName);
          product.classList.add("selected");
        }
  
        updateSelectedList();
      });
    });
  
    // Enviar productos seleccionados al WhatsApp
    send.addEventListener("click", () => {
      if (selectedProducts.length > 0) {
        const message = `Hola, quiero informacin sobre:\n${selectedProducts.join("\n")},`;
        const whatsappUrl = `https://wa.me/${vendorPhone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank"); // Abre WhatsApp en una nueva pestaña
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabButtons2 = document.querySelectorAll(".tab-button2");
    const categories = document.querySelectorAll(".category");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Desactivar todas las pestañas y categorías
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabButtons2.forEach(btn => btn.classList.remove("active"))
        categories.forEach(cat => cat.classList.remove("active"));
  
        // Activar la pestaña y categoría seleccionada
        button.classList.add("active");
        const target = button.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
      });
    });
  
    // Código existente para seleccionar productos
    const products = document.querySelectorAll(".product");
    const selectedList = document.getElementById("selected-products");
    const sendBtn = document.getElementById("send");
    let selectedProducts = [];
  
    const updateSelectedList = () => {
      selectedList.innerHTML = "";
      selectedProducts.forEach(productName => {
        const li = document.createElement("li");
        li.textContent = productName;
        selectedList.appendChild(li);
      });
      sendBtn.disabled = selectedProducts.length === 0;
    };
  
    products.forEach(product => {
      product.addEventListener("click", () => {
        const productName = product.getAttribute("data-product");
  
        if (selectedProducts.includes(productName)) {
          selectedProducts = selectedProducts.filter(item => item !== productName);
          product.classList.remove("selected");
        } else {
          selectedProducts.push(productName);
          product.classList.add("selected");
        }
  
        updateSelectedList();
      });
    });
  
    sendBtn.addEventListener("click", () => {
      if (selectedProducts.length > 0) {
        const message = `Hola, quiero pedir:\n${selectedProducts.join("\n")}`;
        const whatsappUrl = `https://wa.me/524651142491?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
      } else {
        alert("Por favor selecciona algún producto.");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const flip = document.querySelectorAll(".vuelta");
  
    flip.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        const card = button.closest(".card");
        card.classList.toggle("active");
      });
    });
  });
  
  
  