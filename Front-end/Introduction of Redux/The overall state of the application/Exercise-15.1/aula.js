const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {
  store.dispatch({ type: INCREMENTO });
  // DISPARA A ACTION DE ADICIONAR + 1 AO COUNTER
  //store.???
};

const actionDecremento = () => {
  store.dispatch({ type: DECREMENTO });
  // DISPARA A ACTION DE REMOVER - 1 AO COUNTER
  //store.???
};
// ========== REDUCER ==========
const initialState = { value: 0 };
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENTO:
      return { value: state.value + 1 };

    case DECREMENTO:
      return { value: state.value - 1 };

    default:
      return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const counter = store.getState();
  showCountValue(counter.value);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener("click", actionDecremento);
