import React from "react";
import { Stack, Button, ButtonGroup } from "@mui/material";

const LessonButtonGroup = () => {
	return (
		<Stack spacing={{ xs: 1, sm: 2 }} direction="row" flexWrap="wrap">
			<ButtonGroup variant="outlined">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup variant="outlined" orientation="vertical">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup
				variant="contained"
				orientation="horizontal"
				size="small"
				color="success">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</Stack>
	);
};

export default LessonButtonGroup;
