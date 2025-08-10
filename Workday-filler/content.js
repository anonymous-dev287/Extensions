function fillInput(labelText, value) {
  if (!value) return; // Skip empty values
  const labels = document.querySelectorAll('label');
  for (let label of labels) {
    if (label.innerText.trim().toLowerCase().includes(labelText.toLowerCase())) {
      const inputId = label.getAttribute('for');
      if (inputId) {
        const input = document.getElementById(inputId);
        if (input) {
          input.value = value;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    }
  }
}

function autofillProfile(data) {
  const observer = new MutationObserver(() => {
    // Basic Info
    fillInput("First Name", data.firstName);
    fillInput("Last Name", data.lastName);
    fillInput("Email", data.email);
    fillInput("Phone", data.phone);

    // Extended Info
    fillInput("LinkedIn", data.linkedin);
    fillInput("Profile URL", data.linkedin); // Sometimes labeled differently
    fillInput("Company", data.company);
    fillInput("Current Employer", data.company);
    fillInput("Role", data.roleDesc);
    fillInput("Job Description", data.roleDesc);
    fillInput("Employment Period", data.timeEmployer);
    fillInput("Start Date", data.timeEmployer.split("-")[0]?.trim());
    fillInput("End Date", data.timeEmployer.split("-")[1]?.trim());
    fillInput("Education", data.education);
    fillInput("School", data.education);
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

chrome.storage.sync.get(
  ['firstName', 'lastName', 'email', 'phone', 'linkedin', 'company', 'roleDesc', 'timeEmployer', 'education'],
  (data) => {
    autofillProfile(data);
  }
);
