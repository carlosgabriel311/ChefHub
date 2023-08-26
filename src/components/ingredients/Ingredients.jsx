import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import api from "../../services/api";
import Navbar from "../navbar/Navbar";
import classes from "./Ingredients.module.css";

const Ingredients = () => {
  const [ingredients, setIngredient] = useState("");
  const [addIngInput, setAddIngInput] = useState(false);

  const addIngredient = () => {
    setAddIngInput(true);
  };

  const closeInput = () => {
    setAddIngInput(false);
  };

  let array = [];
  let selectedIngredients = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  for (let i = 0; i < selectedIngredients.length; i++) {
    array.push(selectedIngredients[i].value);
  }
  console.log(array);

  const clearIngredients = () => {
    for (let i = 0; i < selectedIngredients.length; i++) {
      selectedIngredients[i].checked = false;
    }
    array.length = 0;
    console.log(array);
  };

  const handleSubmit = async () => {
    await api.post("/create_recipe", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(array),
    });
  };

  return (
    <>
      <Navbar />
      <h1 className={classes.title}>Escolha os ingredientes</h1>
      <section className={classes.ingredientsBody}>
        <label className={classes.checkboxFilter}>
          Ovo
          <input
            type="checkbox"
            value="Ovo"
            id="Ovo"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label className={classes.checkboxFilter}>
          Farinha
          <input
            type="checkbox"
            value="Farinha"
            id="Farinha"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label className={classes.checkboxFilter}>
          Tomate
          <input
            type="checkbox"
            value="Tomate"
            id="Tomate"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>

        <label className={classes.checkboxFilter}>
          Milho
          <input
            type="checkbox"
            value="Milho"
            id="Milho"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label className={classes.checkboxFilter}>
          Frango
          <input
            type="checkbox"
            value="Frango"
            id="Frango"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label className={classes.checkboxFilter}>
          Acelga
          <input
            type="checkbox"
            value="Acelga"
            id="Acelga"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label className={classes.checkboxFilter}>
          Peixe
          <input
            type="checkbox"
            value="Peixe"
            id="Peixe"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label className={classes.checkboxFilter}>
          Cebola
          <input
            type="checkbox"
            value="Cebola"
            id="Cebola"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label className={classes.checkboxFilter}>
          Calabresa
          <input
            type="checkbox"
            value="Calabresa"
            id="Calabresa"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>

        <label className={classes.checkboxFilter}>
          Cenoura
          <input
            type="checkbox"
            value="Cenoura"
            id="Cenoura"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label className={classes.checkboxFilter}>
          Espinafre
          <input
            type="checkbox"
            value="Espinafre"
            id="Espinafre"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <label className={classes.checkboxFilter}>
          Berinjela
          <input
            type="checkbox"
            value="Berinjela"
            id="Berinjela"
            name="ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
      </section>
      <section className={classes.footer}>
        {addIngInput ? (
          <span className={classes.addIngInput}>
            <input
              type="text"
              placeholder="Digite o ingrediente desejado"
            />
            <button onClick={closeInput} className={classes.closeButton}>
              X
            </button>
            <button
              type="button"
              className={classes.addButton}
            >
              Adicionar
            </button>
          </span>
        ) : (
          ""
        )}
        <div className={classes.ingredientsButtons}>
          <button
            type="button"
            className={classes.deleteButton}
            onClick={clearIngredients}
          >
            Limpar selecionados
          </button>
          <button
            type="button"
            onClick={addIngredient}
            className={classes.addIngredientButton}
          >
            Adicionar ingrediente
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className={classes.nextButton}
          >
            Próxima etapa
          </button>
        </div>
      </section>
    </>
  );
};

export default Ingredients;
