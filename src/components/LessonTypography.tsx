import React from "react";
import { Typography } from "@mui/material";

export const LessonTypography = () => {
	return (
		<div>
			<Typography variant="body1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto
				nam labore possimus temporibus dignissimos, porro quaerat excepturi esse
				enim! Voluptatibus, doloremque ipsum eaque praesentium facilis earum,
				odio minus officia laudantium in nostrum nesciunt quis quae, placeat
				atque? Iure facilis quis aspernatur nam modi id eaque iste laboriosam
				distinctio reiciendis.
			</Typography>
			<Typography variant="body2">
				Body2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Quisquam, beatae architecto ea accusamus, maxime minus necessitatibus et
				omnis nisi eveniet ab iste id at assumenda ullam fuga, repellendus quis
				atque mollitia? Possimus porro ducimus omnis ullam quibusdam corporis
				ipsam quo.
			</Typography>
			<Typography variant="h1">H1 GÖRÜNÜMÜ</Typography>
			<Typography variant="h2">H2 GÖRÜNÜMÜ</Typography>
			<Typography variant="h3">H3 GÖRÜNÜMÜ</Typography>
			<Typography variant="h4">H4 GÖRÜNÜMÜ</Typography>
			<Typography variant="h5">H5 GÖRÜNÜMÜ</Typography>
			<Typography variant="h6">H6 GÖRÜNÜMÜ</Typography>

			<Typography variant="h1" component="h4">
				H1 GÖRÜNÜMÜ
			</Typography>
			<Typography variant="h1" component="h4" align="left">
				H1 GÖRÜNÜMÜ
			</Typography>
			<Typography variant="h1" component="h4" align="right">
				H1 GÖRÜNÜMÜ
			</Typography>
		</div>
	);
};
