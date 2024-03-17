import React from "react";
import { Button, Stack } from "@mui/material";

const LessonButton = () => {
	return (
		<Stack
			spacing={{ xs: 1, sm: 2 }}
			direction="row"
			useFlexGap
			flexWrap="wrap">
			<Button variant="contained">Click me</Button>
		</Stack>
	);
};

export default LessonButton;
