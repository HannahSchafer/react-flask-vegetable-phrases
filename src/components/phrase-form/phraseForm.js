import React from 'react';


const PhraseForm = (props) => {
  return (
    <form className='ui form'>
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
    		Generate Pair Count
    	</button>
 		</form>
  );
}

export default PhraseForm;
