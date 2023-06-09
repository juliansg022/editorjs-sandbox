import "./App.css";
import { useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
// import Undo from "editorjs-undo";
import ToggleBlock from "editorjs-toggle-block";

function App() {
	// eslint-disable-next-line no-unused-vars
	const [editor, _setEditor] = useState(
		() =>
			new EditorJS({
				// onReady: () => {
				// 	new Undo({ editor });
				// },
				autofocus: true,
				holder: "editorjs",
				readOnly: false,
				tools: {
					header: Header,
					list: List,
					toggle: {
						class: ToggleBlock,
						inlineToolbar: true,
					},
				},
			})
	);

	const save = () => {
		editor.save().then((savedData) => {
			const output = document.getElementById("output");

			output.innerHTML = JSON.stringify(savedData, null, 4);
		});
	};

	return (
		<div className='App'>
			<div id='editorjs' />
			<hr className='ce-block' />
			<button type='button' className='btn btn-primary btn-lg' onClick={save}>
				Save
			</button>
			<hr className='ce-block' />
			<pre id='output' />
		</div>
	);
}

export default App;
