import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import { Button } from "@mui/material";

function ApikeyGenerateKey({ role = "Super Admin" }) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="30px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="Generate API KEY" subtitle="Welcome" />
			</Box>
			<Box
				display="grid"
				gridTemplateColumns="repeat(12,1fr)"
				gridAutoRows="155px"
				gap="19px"
			>
				<Box
					gridColumn="span 12"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Box
						mt="10px"
						p="0 30px"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box
							height="250px"
							ml="-2em"
							width="2000px"
							mt="-1em"
							marginRight="-2em"
						>
							<Box textAlign="center">
								<Button color="primary" variant="raised">
									My button
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default ApikeyGenerateKey;
