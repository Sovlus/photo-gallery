import React, { useState } from 'react';

const Upload = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const types = ['image/png', 'image/jpg'];


	const handler = (e) => {
		let selected = e.target.files[0];
		

		if (selected && types.includes(selected.type))  {
			setFile(selected);
			setError('');
		
	} else  {
		setFile(null);
		setError('Wybierz plik z zakończeniem png lub jpeg');
	}
}
	return (
		<form>
			<input type="file" onChange={handler}/>
			<div className="output">
				{ error && <div className="error">{ error }</div>}
				{ file && <div> { file.name }</div>}
			</div>
		</form>
	)

}

export default Upload;