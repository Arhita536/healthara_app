const recipes = [
    {
      ingredients: ["bread", "potato"],
      recipe: "Try making Bread Aloo Tikki Sandwich 🥪!"
    },
    {
      ingredients: ["besan", "onion"],
      recipe: "Make some tasty Besan Chilla 🌮!"
    },
    {
      ingredients: ["rice", "tomato"],
      recipe: "How about Tomato Rice 🍅🍚?"
    },
    {
      ingredients: ["paneer", "capsicum", "onion"],
      recipe: "Paneer Tikka with grilled veggies!"
    },
    {
      ingredients: ["poha", "onion", "peas"],
      recipe: "Classic Breakfast Poha 🥣!"
    },
    {
      ingredients: ["egg", "bread"],
      recipe: "Make a quick Egg Sandwich!"
    },
    {
      ingredients: ["oats", "banana", "honey"],
      recipe: "Oats Banana Porridge for a healthy start!"
    },
    {
      ingredients: ["pasta", "tomato", "cheese"],
      recipe: "Yummy Tomato Cheese Pasta 🍝!"
    },
    {
      ingredients: ["carrot", "peas", "potato"],
      recipe: "Try Vegetable Cutlets 🥕🥔!"
    },
    {
      ingredients: ["milk", "banana"],
      recipe: "Banana Smoothie 🥤!"
    },
    {
      ingredients: ["curd", "boondi"],
      recipe: "Boondi Raita for a cool side dish!"
    },
    {
      ingredients: ["corn", "cheese", "bread"],
      recipe: "Corn Cheese Toast 🌽🧀🍞!"
    },
    {
      ingredients: ["suji", "curd", "mustard seeds"],
      recipe: "Make soft Rava Idlis 🥣!"
    },
    {
      ingredients: ["rice", "curd", "mustard seeds"],
      recipe: "South Indian-style Curd Rice 🥄!"
    },
    {
      ingredients: ["murmura", "onion", "tomato"],
      recipe: "Spicy Bhel Puri 🌶️!"
    },
    {
      ingredients: ["moong dal", "rice", "ghee"],
      recipe: "Wholesome Moong Dal Khichdi 🥘!"
    },
    {
      ingredients: ["atta", "onion", "ajwain"],
      recipe: "Crispy Onion Paratha 🫓!"
    },
    {
      ingredients: ["leftover roti", "onion", "capsicum"],
      recipe: "Tasty Roti Noodles 🍜!"
    },
    {
      ingredients: ["leftover rice", "vegetables", "soya sauce"],
      recipe: "Quick Fried Rice 🍚!"
    },
    {
      ingredients: ["vermicelli", "vegetables"],
      recipe: "Healthy Vegetable Semiya Upma 🍜!"
    },
    {
      ingredients: ["dal", "wheat flour"],
      recipe: "Yummy Dal Paratha 🫓!"
    },
    {
      ingredients: ["banana", "milk", "oats"],
      recipe: "Power-packed Banana Oat Smoothie 💪!"
    },
    {
      ingredients: ["eggs", "spinach"],
      recipe: "Spinach Omelette 🥚🥬!"
    },
    {
      ingredients: ["paneer", "spinach"],
      recipe: "Classic Palak Paneer 🍲!"
    },
    {
      ingredients: ["leftover sabzi", "roti"],
      recipe: "Make Roti Wraps 🌯!"
    },
    // Add 100+ more here as needed
  ];
  
  const cravings = {
    "chips": "Try roasted makhana or baked sweet potato chips!",
    "chocolate": "Go for dark chocolate or banana dipped in peanut butter!",
    "ice cream": "Try frozen yogurt with fruits 🍧!",
    "soda": "Replace it with lemon water or coconut water 🥥!",
    "pizza": "Try whole-wheat veggie pizza with low-fat cheese 🍕!",
    "burger": "Switch to a grilled veggie sandwich 🥪!",
    "candy": "Try dried fruits or homemade energy balls!",
    "cookies": "Make oatmeal banana cookies 🍪!",
    "french fries": "Bake sweet potato fries 🍠!",
    "noodles": "Try whole grain or zucchini noodles 🍜!"
  };
  
  function suggestRecipe() {
    const selected = Array.from(document.getElementById("ingredients").selectedOptions)
                          .map(option => option.value.trim().toLowerCase());
  
    const matchedRecipe = recipes.find(r =>
      r.ingredients.every(i => selected.includes(i))
    );
  
    const result = document.getElementById("recipe-result");
    if (matchedRecipe) {
      result.innerHTML = `<div class="w3-panel w3-pale-green w3-leftbar w3-border-green w3-padding"><strong>${matchedRecipe.recipe}</strong></div>`;
    } else {
      result.innerHTML = `<div class="w3-panel w3-pale-yellow w3-leftbar w3-border-orange w3-padding">Try making a mixed veg sabzi, khichdi, or sandwich with your ingredients! 🥗</div>`;
    }
  }
  
  function showAlternative() {
    const craving = document.getElementById("cravings").value.trim().toLowerCase();
    const result = document.getElementById("craving-result");
  
    if (cravings[craving]) {
      result.innerHTML = `<div class="w3-panel w3-pale-blue w3-leftbar w3-border-blue w3-padding">${cravings[craving]}</div>`;
    } else {
      result.innerHTML = `<div class="w3-panel w3-pale-red w3-leftbar w3-border-red w3-padding">No alternative found. Try choosing a different craving!</div>`;
    }
  }
  
  function navigateTo(page) {
    window.location.href = `${page}.html`;
  }
  