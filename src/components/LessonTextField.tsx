import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

const LessonTextField = () => {
	const [value, setValue] = useState();
	return (
		<Stack spacing={3}>
			<Stack direction="row" spacing={2}>
				<TextField
					label="Your Name:"
					id="filled-hidden-label-small"
					defaultValue="Small"
					variant="outlined"
					size="small"
				/>
				<TextField
					hiddenLabel
					id="filled-hidden-label-normal"
					defaultValue="Normal"
					variant="filled"
				/>
				<TextField
					hiddenLabel
					id="filled-hidden-label-normal"
					defaultValue="Normal"
					variant="filled"
					size="small"
					color="error"
					helperText="Please enter your name..."
					type="password"
					inputProps={{ readOnly: true }}
				/>
				<TextField
					onChange={(e) => e.target.value}
					hiddenLabel
					id="filled-hidden-label-normal"
					defaultValue="Normal"
					variant="filled"
					size="small"
					color="error"
					helperText="Please enter your name..."
					type="password"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">TL</InputAdornment>
						),
						endAdornment: <InputAdornment position="end">TL</InputAdornment>,
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default LessonTextField;
