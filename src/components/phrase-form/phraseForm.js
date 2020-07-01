import React from 'react';


const PhraseForm = (props) => {
  return (
    <form onSubmit={props.addPhrase} className='ui form'>
     	<input
     		name='phraseContent'
    		type='text'
    		placeholder='Type a vegetable phrase...'
    		onChange={props.handleChange}
    		value={props.phraseContent}
    	/>
    	<button
    		onClick={props.addPhrase}
    		className='ui button green'>
        Add Vegetable Phrase
    	</button>
 		</form>
  );
}

export default PhraseForm;
