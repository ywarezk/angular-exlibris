/**
 * playing with Redux
 */
 
 
// gets the current state
// get the action
// decide what the next state will be
function reducer(state, action) {
	if (action.type === 'CHANGE_MONEY') {
		// immutable
		// state.money+=action.payload;
		return {...state, money: state.money + action.payload} 
	}
	return state;
}
 
const store = Redux.createStore(reducer, {
	money: 0
})

// state = {   }
/*

state = {
	user: {
		firstName: ...	
	},
	todo: {
		
	}
}

 */

store.subscribe(() => {
	const state = store.getState();
	const currentMoney = state.money;
	document.getElementById('amount-money').innerText = currentMoney;
});

document.getElementById('deposit-button').addEventListener('click', () => {
	
	// action - describe the change that i want to do in the state
	const changeMoney = { type: 'CHANGE_MONEY', payload: 10 };
	
	store.dispatch(changeMoney);
	
})

// State0  + [action1, action2, action3, action4] => currentState


// 1. state0 + action1 = state1
// 2. state1 + action2 = state2
// 3. state2 + action3 = state3 ...



/**

------A1------A2-------A3------A4------>


-S0---S1------S2-------S3------S4--------------->

 */
 
 // i can implement Redux with RXJS => NGRX