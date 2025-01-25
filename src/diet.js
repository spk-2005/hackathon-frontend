import React, { useState } from "react";
import "./diet.css";

const Diet = () => {
  const [selectedDisease, setSelectedDisease] = useState("");

  // Extended diet plans for diseases
  const dietPlans = {
    diabetes: {
      eat: [
        "Whole grains (oatmeal, brown rice)",
        "Non-starchy vegetables (spinach, broccoli)",
        "Low-GI fruits (berries, apples, oranges)",
        "Lean proteins (chicken, tofu, beans)",
        "Healthy fats (avocado, nuts)",
      ],
      avoid: [
        "Sugary foods (cakes, candies)",
        "Refined carbs (white bread, white rice)",
        "Sweetened beverages (soda, fruit juices)",
      ],
      schedule: {
        Monday: ["Oatmeal with berries", "Grilled chicken salad", "Steamed vegetables with quinoa"],
        Tuesday: ["Greek yogurt with nuts", "Lentil soup", "Baked salmon with broccoli"],
        Wednesday: ["Avocado toast", "Vegetable stir-fry", "Chicken and quinoa bowl"],
        Thursday: ["Whole wheat toast with avocado", "Grilled turkey sandwich", "Baked tilapia with green beans"],
        Friday: ["Oatmeal with chia seeds", "Salmon salad", "Roasted vegetables with quinoa"],
        Saturday: ["Smoothie with spinach and berries", "Chicken stir-fry", "Vegetable quinoa bowl"],
        Sunday: ["Greek yogurt with honey", "Baked chicken with broccoli", "Grilled vegetables with brown rice"],
      },
    },
    bloodPressure: {
      eat: [
        "Leafy greens (spinach, kale)",
        "Berries (blueberries, strawberries)",
        "Whole grains (quinoa, oats)",
        "Low-fat dairy (skim milk, yogurt)",
        "Potassium-rich foods (bananas, sweet potatoes)",
      ],
      avoid: [
        "High-sodium foods (canned soups, processed meats)",
        "Sugary snacks (pastries, cakes)",
        "Fried and fatty foods (fast food, chips)",
      ],
      schedule: {
        Monday: ["Smoothie with spinach and banana", "Grilled turkey sandwich", "Roasted sweet potatoes with lean meat"],
        Tuesday: ["Whole-grain toast with avocado", "Chicken and quinoa bowl", "Baked fish with asparagus"],
        Wednesday: ["Oatmeal with berries", "Vegetable soup", "Grilled salmon with greens"],
        Thursday: ["Spinach salad with almonds", "Quinoa with roasted vegetables", "Baked chicken with sweet potatoes"],
        Friday: ["Smoothie with berries", "Turkey and avocado wrap", "Grilled fish with greens"],
        Saturday: ["Oatmeal with flaxseeds", "Quinoa salad with vegetables", "Baked salmon with kale"],
        Sunday: ["Avocado toast", "Grilled chicken with quinoa", "Roasted vegetables with turkey breast"],
      },
    },
    obesity: {
      eat: [
        "High-fiber foods (vegetables, whole grains)",
        "Lean proteins (chicken breast, fish)",
        "Healthy fats (olive oil, avocado)",
        "Low-calorie snacks (nuts, seeds)",
        "Low-sugar fruits (berries, apples)",
      ],
      avoid: [
        "Sugary drinks (soda, juices)",
        "Fried and processed foods",
        "High-calorie desserts",
        "Refined carbs (white bread, pasta)",
      ],
      schedule: {
        Monday: ["Vegetable omelette", "Grilled chicken salad", "Steamed vegetables with salmon"],
        Tuesday: ["Greek yogurt with nuts", "Quinoa salad", "Baked chicken with sweet potatoes"],
        Wednesday: ["Smoothie with spinach and chia seeds", "Turkey wrap", "Vegetable stir-fry with tofu"],
        Thursday: ["Cucumber and hummus", "Chicken stir-fry with quinoa", "Baked fish with roasted vegetables"],
        Friday: ["Avocado toast", "Vegetable soup", "Baked chicken with steamed broccoli"],
        Saturday: ["Chia seed pudding", "Grilled chicken with salad", "Roasted salmon with asparagus"],
        Sunday: ["Vegetable smoothie", "Grilled turkey with quinoa", "Roasted vegetables with chicken breast"],
      },
    },cancer: {
      eat: [
        "Cruciferous vegetables (broccoli, cauliflower)",
        "Antioxidant-rich fruits (blueberries, cherries)",
        "Whole grains (quinoa, oats)",
        "Lean proteins (fish, legumes)",
        "Healthy fats (olive oil, nuts)",
      ],
      avoid: [
        "Processed meats (bacon, sausage)",
        "Sugary foods and drinks",
        "Refined grains (white bread, pasta)",
      ],
      schedule: {
        Monday: ["Oatmeal with blueberries", "Grilled salmon with spinach", "Steamed broccoli with brown rice"],
        Tuesday: ["Avocado toast", "Vegetable soup with lentils", "Baked chicken with sweet potatoes"],
        Wednesday: ["Smoothie with spinach and cherries", "Quinoa salad with beans", "Baked fish with green beans"],
        Thursday: ["Greek yogurt with nuts", "Roasted vegetable wrap", "Grilled turkey with quinoa"],
        Friday: ["Whole grain toast with avocado", "Salmon salad", "Vegetable stir-fry with tofu"],
        Saturday: ["Chia seed pudding", "Grilled chicken salad", "Baked salmon with asparagus"],
        Sunday: ["Spinach smoothie", "Vegetable soup", "Baked tilapia with roasted vegetables"],
      },
    },
  
    heartDisease: {
      eat: [
        "Omega-3 fatty acids (salmon, flaxseeds)",
        "Leafy greens (spinach, kale)",
        "Whole grains (brown rice, oats)",
        "Nuts (walnuts, almonds)",
        "Low-fat proteins (chicken, turkey)",
      ],
      avoid: [
        "Trans fats (margarine, processed foods)",
        "Saturated fats (red meat, cheese)",
        "Excessive salt (salty snacks, canned foods)",
        "Refined carbs (white bread, pastries)",
      ],
      schedule: {
        Monday: ["Oatmeal with flaxseeds", "Grilled turkey sandwich", "Baked salmon with steamed broccoli"],
        Tuesday: ["Avocado toast", "Quinoa salad with chicken", "Vegetable stir-fry with tofu"],
        Wednesday: ["Spinach smoothie", "Lentil soup", "Grilled chicken with sweet potatoes"],
        Thursday: ["Salmon salad", "Grilled chicken with quinoa", "Vegetable stir-fry"],
        Friday: ["Whole-grain toast with avocado", "Baked salmon with greens", "Chicken with quinoa"],
        Saturday: ["Smoothie with spinach", "Vegetable soup", "Baked tilapia with roasted vegetables"],
        Sunday: ["Avocado toast", "Roasted sweet potatoes with turkey", "Vegetable stir-fry with tofu"],
      },
    },
    cholesterol: {
      eat: [
        "Oats and whole grains",
        "Nuts and seeds (walnuts, chia seeds)",
        "Fatty fish (salmon, mackerel)",
        "Fruits (apples, citrus)",
        "Vegetables (spinach, carrots)",
      ],
      avoid: [
        "Trans fats (fried foods, margarine)",
        "High-saturated fat foods (butter, cheese)",
        "Processed snacks (chips, cookies)",
      ],
      schedule: {
        Monday: ["Oatmeal with walnuts", "Grilled salmon with spinach", "Steamed carrots with brown rice"],
        Tuesday: ["Smoothie with chia seeds", "Vegetable stir-fry with tofu", "Baked chicken with sweet potatoes"],
        Wednesday: ["Greek yogurt with apples", "Quinoa salad", "Grilled fish with green beans"],
        Thursday: ["Avocado toast", "Vegetable soup with lentils", "Roasted vegetables with salmon"],
        Friday: ["Chia pudding", "Turkey wrap with veggies", "Vegetable stir-fry with quinoa"],
        Saturday: ["Spinach smoothie", "Grilled chicken salad", "Baked tilapia with roasted vegetables"],
        Sunday: ["Whole grain toast with almond butter", "Vegetable soup", "Grilled salmon with steamed broccoli"],
      },
    },
    asthma: {
      eat: [
        "Vitamin C-rich foods (oranges, strawberries)",
        "Leafy greens (spinach, kale)",
        "Omega-3-rich fish (salmon, tuna)",
        "Ginger and turmeric",
        "Magnesium-rich foods (avocado, almonds)",
      ],
      avoid: [
        "Dairy products (milk, cheese)",
        "Preservative-rich processed foods",
        "Fried and oily foods",
      ],
      schedule: {
        Monday: ["Oatmeal with strawberries", "Grilled salmon with greens", "Steamed broccoli with brown rice"],
        Tuesday: ["Spinach smoothie", "Vegetable soup", "Baked fish with asparagus"],
        Wednesday: ["Avocado toast", "Lentil salad", "Chicken stir-fry with quinoa"],
        Thursday: ["Greek yogurt with nuts", "Quinoa and spinach salad", "Baked chicken with kale"],
        Friday: ["Chia seed pudding", "Vegetable wrap", "Baked salmon with vegetables"],
        Saturday: ["Smoothie with oranges", "Grilled chicken salad", "Vegetable stir-fry with tofu"],
        Sunday: ["Spinach omelette", "Roasted vegetables with quinoa", "Baked fish with kale"],
      },
    },
    arthritis: {
      eat: [
        "Omega-3 fatty acids (salmon, chia seeds)",
        "Anti-inflammatory spices (turmeric, ginger)",
        "Leafy greens (spinach, kale)",
        "Fruits (berries, oranges)",
        "Whole grains (brown rice, quinoa)",
      ],
      avoid: [
        "Refined sugars (sweets, pastries)",
        "Fried and processed foods",
        "Dairy and high-fat foods",
      ],
      schedule: {
        Monday: ["Oatmeal with chia seeds", "Grilled salmon with greens", "Steamed broccoli with brown rice"],
        Tuesday: ["Spinach smoothie", "Lentil soup", "Baked fish with asparagus"],
        Wednesday: ["Avocado toast", "Vegetable quinoa salad", "Chicken stir-fry with kale"],
        Thursday: ["Greek yogurt with nuts", "Roasted vegetables", "Grilled turkey with spinach"],
        Friday: ["Smoothie with berries", "Quinoa salad", "Baked salmon with broccoli"],
        Saturday: ["Spinach omelette", "Vegetable stir-fry", "Roasted sweet potatoes with chicken"],
        Sunday: ["Chia seed pudding", "Grilled chicken with kale", "Baked fish with green beans"],
      },
    },
    depression: {
      eat: [
        "Omega-3-rich fish (salmon, mackerel)",
        "Whole grains (oats, brown rice)",
        "Leafy greens (spinach, kale)",
        "Dark chocolate (in moderation)",
        "Berries and bananas",
      ],
      avoid: [
        "Sugary snacks",
        "Processed foods",
        "Excess caffeine",
      ],
      schedule: {
        Monday: ["Oatmeal with bananas", "Grilled chicken with spinach", "Vegetable stir-fry with quinoa"],
        Tuesday: ["Smoothie with berries", "Lentil soup", "Baked salmon with broccoli"],
        Wednesday: ["Greek yogurt with nuts", "Vegetable quinoa salad", "Chicken stir-fry"],
        Thursday: ["Avocado toast", "Grilled turkey sandwich", "Roasted vegetables with salmon"],
        Friday: ["Dark chocolate smoothie", "Quinoa salad", "Baked tilapia with greens"],
        Saturday: ["Spinach omelette", "Vegetable soup", "Baked chicken with sweet potatoes"],
        Sunday: ["Chia seed pudding", "Grilled salmon salad", "Roasted vegetables with quinoa"],
      },
    },
    kidneyDisease: {
      eat: [
        "Low-potassium fruits (apples, berries)",
        "Low-sodium vegetables (cabbage, zucchini)",
        "Lean proteins (chicken, fish)",
        "Unsalted nuts and seeds",
        "White rice and pasta (in moderation)",
      ],
      avoid: [
        "High-potassium foods (bananas, oranges)",
        "High-sodium processed foods",
        "Fried and fatty foods",
      ],
      schedule: {
        Monday: ["Oatmeal with berries", "Grilled chicken with cabbage", "Steamed vegetables with rice"],
        Tuesday: ["Apple slices with almond butter", "Vegetable soup with zucchini", "Baked fish with white rice"],
        Wednesday: ["Greek yogurt", "Lentil salad with spinach", "Chicken stir-fry"],
        Thursday: ["Smoothie with blueberries", "Quinoa salad", "Grilled salmon with greens"],
        Friday: ["White rice with steamed cabbage", "Vegetable stir-fry", "Baked chicken"],
        Saturday: ["Spinach omelette", "Grilled turkey salad", "Vegetable stir-fry with tofu"],
        Sunday: ["Apple smoothie", "Roasted vegetables", "Baked fish with white rice"],
      },
    },
  };


  return (
    <div className="App">
      <h1>Diet Suggestions Based on Diseases</h1>
      <label htmlFor="disease-select">Choose a disease:</label>
      <select
        id="disease-select"
        value={selectedDisease}
        onChange={(e) => setSelectedDisease(e.target.value)}
      >
        <option value="">--Select--</option>
        <option value="diabetes">Diabetes</option>
        <option value="bloodPressure">Blood Pressure</option>
        <option value="obesity">Obesity</option>
        <option value="heartDisease">Heart Disease</option>
        <option value="cancer">Cancer</option>
        <option value="cholesterol">Cholesterol Issues</option>
        <option value="asthma">Asthma</option>
        <option value="arthritis">Arthritis</option>
        <option value="depression">Depression</option>
        <option value="kidneyDisease">Kidney Disease</option>
      </select>

      {selectedDisease && (
        <div className="diet-plan">
          <h2>
            Recommendations for{" "}
            {selectedDisease.charAt(0).toUpperCase() + selectedDisease.slice(1)}
          </h2>
          <h3>Foods to Eat:</h3>
          <ul>
            {dietPlans[selectedDisease].eat.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Foods to Avoid:</h3>
          <ul>
            {dietPlans[selectedDisease].avoid.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Weekly Schedule:</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(dietPlans[selectedDisease].schedule).map(
                ([day, meals], index) => (
                  <tr key={index}>
                    <td>{day}</td>
                    <td>{meals[0]}</td>
                    <td>{meals[1]}</td>
                    <td>{meals[2]}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Diet;