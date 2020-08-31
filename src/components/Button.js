import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";

const ButtonSC = styled.button``;

const Button = ({text=''}) => {
	return (
		<ButtonSC>
			{text}
		</ButtonSC>
	);
};
Button.propTypes = {
	text: PropTypes.string
}
export default Button;