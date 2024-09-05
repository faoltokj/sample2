import { Box, Grid, GridItem } from "@chakra-ui/react";
import SignupForm from "./low_level/SignupForm";
import { useState } from "react";
import CodeCheck from "./low_level/CodeCheck";
import SignupResult from "./low_level/SignupResult";

export default function Signup() {
    const [curStep, setCurStep] = useState(0);

    const next = () => {
        setCurStep(curStep + 1);
    }

    const renderStep = (step) => {
        switch (step) {
            case 0:
                return <SignupForm next={next} />;
            case 1:
                return <CodeCheck next={next} />;
            case 2:
                return <SignupResult />;
        }
    }

    return (
        <Box as='main' w="100%" h="90vh">
            <Grid h="100%" templateColumns='repeat(2, 1fr)' gap={10} pt='10'>
                <GridItem h="100%"> 
                    {renderStep(curStep)}
                </GridItem>
                <GridItem />
            </Grid>
        </Box>
    );
}