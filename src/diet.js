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
    // Include similar full weekly schedules for other diseases like cancer, cholesterol, asthma, arthritis, depression, kidneyDisease...
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