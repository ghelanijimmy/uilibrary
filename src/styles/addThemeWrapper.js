import {ThemeProvider} from "styled-components";
import GlobalStyle from "./GlobalStyle";
import {theme} from "./theme/theme";

export const addThemeWrapper = (Component) => (props) => {
	console.log(props);
	return (
		<ThemeProvider theme={(props.theme && Object.keys(props?.theme)?.length && props.theme) || theme}>
			<GlobalStyle>
				<Component {...props} />
			</GlobalStyle>
		</ThemeProvider>
	)
}