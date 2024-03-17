import React from "react";
import { Button, Stack } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const LessonButton = () => {
	return (
		<Stack spacing={3}>
			<Stack spacing={{ xs: 1, sm: 2 }} direction="row" flexWrap="wrap">
				<Button variant="text">Click me</Button>
				<Button variant="contained">Click me</Button>
				<Button variant="outlined">Click me</Button>
			</Stack>
			<Stack spacing={{ xs: 1, sm: 2 }} direction="row" flexWrap="wrap">
				<Button variant="text" color="success">
					Click me
				</Button>
				<Button variant="contained" color="error">
					Click me
				</Button>
				<Button variant="outlined" color="warning">
					Click me
				</Button>
			</Stack>
			<Stack spacing={{ xs: 1, sm: 2 }} direction="row" display="block">
				<Button variant="contained" size="small" color="error">
					Small
				</Button>
				<Button variant="contained" size="medium" color="info">
					Medium
				</Button>
				<Button
					variant="contained"
					size="large"
					color="success"
					startIcon={<AddBoxIcon />}
					endIcon={<AddBoxIcon />}
					onClick={() => alert("Clicked!")}>
					Large
				</Button>
			</Stack>
		</Stack>
	);
};

export default LessonButton;
