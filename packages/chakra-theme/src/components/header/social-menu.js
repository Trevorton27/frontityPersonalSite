import { Box, PseudoBox, VisuallyHidden } from "@chakra-ui/core";
import React from "react";
import { SiteMenu } from "./navigation";
import {
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoFacebook,
  IoLogoInstagram
} from "react-icons/io";
import Link from "../link";

const SocialMenu = props => (
  <SiteMenu spacing="30px" ml="24px" position={{ sm: "relative" }} {...props} />
);

const SocialMenuItem = ({ icon, label, link, ...props }) => (
  <PseudoBox
    color="#eca419"
    transition="all 0.3s"
    _hover={{ color: "white" }}
    as="li"
    listStyleType="none"
    margin="0"
    {...props}
  >
    <Link link={link}>
      <Box as={icon} size="24px" />
    </Link>
    <VisuallyHidden>{label}</VisuallyHidden>
  </PseudoBox>
);

const icons = {
  twitter: IoLogoTwitter,
  pinterest: IoLogoPinterest,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram
};

const SocialNav = ({ menu, ...props }) => (
  <Box ml="auto" as="nav" display={{ base: "none", lg: "block" }} {...props}>
    <SocialMenu>
      {menu.map(([name, link]) => {
        const SocialIcon = icons[name];
        return (
          <SocialMenuItem
            key={name}
            label={name}
            link={link}
            icon={SocialIcon}
          />
        );
      })}
    </SocialMenu>
  </Box>
);

export default SocialNav;