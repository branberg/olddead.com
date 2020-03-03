import React from 'react';
import Page from '../src/components/page';
import ContentWrapper from '../src/components/contentWrapper';

const PrivacyPolicy = () => (
  <Page title="Privacy Policy | OldDead">
    <ContentWrapper>
      <h1>Privacy Policy</h1>
      <p>
        This privacy notice governs your use of the software application OldDead (“Application”) for mobile devices.
        This notice may change from time to time for any reason.
        If we make any material changes to this notice we will communicate this to you through the appropriate channel, like a prominent notice within the Application.
        If you have any questions or concerns about this notice or the Application, please feel free to contact olddead@branberg.com at any time.
      </p>

      <h2>
        What information does the Application obtain and how is it used?
      </h2>

      <p>
        The Application does not collect, share, or process any personally identifiable information about you,
        such as your name, email address, or geographic location data.
      </p>

      <h2>
        Do advertising companies collect data?
      </h2>
      <p>
        The Application has no functionality for collecting, storing, or sharing user data,
        so no data is shared with advertising companies and no ads are delivered on the Application.
      </p>

      <h2>
        Do you use analytics providers?
      </h2>
      <p>
        No. The Application does not track user usage, so no data is shared or collected by analytics providers.
      </p>

      <h2>
        Do you set cookies on a user’s mobile device?
      </h2>
      <p>
        No. The Application does not use cookies.
      </p>

      <h2>
        Do you comply with the Children’s Online Privacy Protection Act (COPPA)?
      </h2>
      <p>
        Yes. The Application is not meant for children under 13 years old and we do not solicit nor collect
        any data from children. If a parent or guardian becomes aware that his or her child has provided
        us with information, without that parent or guardian’s consent, please contact us at olddead@branberg.com.
      </p>

      <p>
        Last updated on December 2019.
      </p>
    </ContentWrapper>
  </Page>
);

export default PrivacyPolicy;
