import { Toggle, ToggleButton, ToggleOff, ToggleOn } from './toggle.tsx'

export function App() {
	return (
		<div>
			<Toggle>
				<ToggleOn>The button is on</ToggleOn>
				<ToggleOff>The button is off</ToggleOff>
				<ToggleButton />
			</Toggle>
		</div>
	)
}
