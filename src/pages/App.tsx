import * as React from 'react';

import '../index.css';

import * as styles from '../less/app.module.less';

interface Value {
	name: string;
}
interface State {
	text: string;
	data: Value[];
}

class App extends React.Component<{}, State> {
	constructor(props: {}){
		super(props)
		this.state = {
			text: 'ts react app',
			data: [{
				name: '列表',
			},{
				name: '列表',
			},{
				name: '列表',
			},{
				name: '列表',
			}]
		}
	}
	public render() {
		return (
			<div>
				<div className={ styles.index }>
					{
						this.state.text
					}
				</div>
				<List data={ this.state.data } />
			</div>
		);
	}
}

interface ListProps{
	data: Value[];
}

class List extends React.Component<ListProps> {
	constructor(props: ListProps){
		super(props)
	}
	public render() {
		return (
			<ul>
				{
					this.props.data.map((item, index) => {
						return (
							<li key={ `list-${index}` }>{ item.name }-{ index }</li>
						)
					})
				}
			</ul>
		)
	}
}

export default App;