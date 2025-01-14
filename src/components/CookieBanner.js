import CookieConsent from "react-cookie-consent";
import React from "react";

const CookieBanner = () => {
  return (
    <CookieConsent
      style={{ background: "black", textShadow: "2rem 2rem black" }}
      enableDeclineButton
      flipButtons
      buttonStyle={{
        background: "#ffffff",
        color: "black",
      }}
      declineButtonStyle={{
        background: "#B0ADAC",
        color: "black",
      }}
      location="bottom"
      buttonText="I accept"
      declineButtonText="Decline"
      cookieSecurity="true"
      sameSite="none"
      cookieName="gatsby-gdpr-google-analytics"
    >
      This site uses cookies and related technologies, as described in our{" "}
      <a
        aria-label="learn more about cookies"
        role="button"
        tabindex="0"
        class="cc-link"
        href="https://www.vngle.com/privacy"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        privacy
      </a>{" "}
      , for purposes that may include site operation, analytics, enhanced user
      experience, or advertising. You consent to our cookies if you continue to
      use our website. However, if you do not accept cookies, you may not be
      able to use some portions of our services.
    </CookieConsent>
  );
};

export default CookieBanner;
