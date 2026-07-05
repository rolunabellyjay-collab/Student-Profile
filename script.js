document.addEventListener('DOMContentLoaded', () => {
  const profileData = {
    projectTitle: 'Student Profile',
    fullName: 'BELLY JAY E. ROLUNA',
    courseAndYear: 'BSIT - First Year',
    age: '19',
    address: 'P-13 Mancarogo Bliss Bislig City',
    motto: 'Study hard, dream big, and never give up.',
    biography: 'Dream big. Work hard.',
    careerGoals: 'My career goal is to become a skilled IT professional and use technology to solve real-world problems.',
    education: [
      { label: 'Elementary School', value: 'Mangagoy Central Elementary School' },
      { label: 'High School', value: 'Saint Vincent De Paul Diocesan College' },
      { label: 'Senior High School', value: 'Saint Vincent De Paul Diocesan College' },
      { label: 'College (Current)', value: 'De La Salle John Bosco College' }
    ],
    technicalSkills: ['Computer Troubleshooting', 'System Maintenance', 'Basic Networking', 'Office Productivity'],
    programmingLanguages: ['HTML', 'CSS', 'JavaScript', 'Python'],
    softwareApplications: ['VS Code', 'Microsoft Office', 'Canva', 'Google Workspace'],
    softSkills: ['Adaptability', 'Time Management', 'Teamwork', 'Communication'],
    featuredProject: {
      title: 'Student Portfolio Website',
      description: 'A polished student profile website showcasing academic background, skills, projects, and contact details in a clean digital format.',
      language: 'HTML, CSS, JavaScript',
      status: 'Completed'
    },
    achievements: [
      'Completed elementary and secondary education with dedication and perseverance.',
      'Developed strong academic habits while exploring computer and technology fundamentals.',
      'Building practical skills in web development and information technology.',
      'Preparing for future success through continuous learning and self-improvement.'
    ],
    contact: {
      email: 'rolunabellyjay@gmail.com',
      mobile: '09565683901',
      facebook: 'Belly Jay Roluna',
      facebookUrl: 'https://www.facebook.com/'
    }
  };

  document.getElementById('student-name').textContent = profileData.fullName;
  document.getElementById('course-year').textContent = profileData.courseAndYear;
  document.getElementById('student-age').textContent = profileData.age;
  document.getElementById('student-address').textContent = profileData.address;
  document.getElementById('student-motto').textContent = profileData.motto;
  document.getElementById('project-title').textContent = profileData.projectTitle;
  document.getElementById('short-biography').textContent = profileData.biography;
  document.getElementById('career-goals').textContent = profileData.careerGoals;

  const educationList = document.getElementById('education-list');
  educationList.innerHTML = profileData.education
    .map(item => `<li><strong>${item.label}:</strong> ${item.value}</li>`)
    .join('');

  const softSkillsList = document.getElementById('soft-skills');
  softSkillsList.innerHTML = profileData.softSkills.map(item => `<li>${item}</li>`).join('');

  const technicalSkillsList = document.getElementById('technical-skills');
  technicalSkillsList.innerHTML = profileData.technicalSkills.map(item => `<li>${item}</li>`).join('');

  const programmingList = document.getElementById('programming-languages');
  programmingList.innerHTML = profileData.programmingLanguages.map(item => `<li>${item}</li>`).join('');

  const softwareList = document.getElementById('software-applications');
  softwareList.innerHTML = profileData.softwareApplications.map(item => `<li>${item}</li>`).join('');

  document.getElementById('featured-project-title').textContent = profileData.featuredProject.title;
  document.getElementById('featured-project-description').textContent = profileData.featuredProject.description;
  document.getElementById('featured-project-language').textContent = profileData.featuredProject.language;
  document.getElementById('featured-project-status').textContent = profileData.featuredProject.status;

  const achievementsList = document.getElementById('achievements-list');
  achievementsList.innerHTML = profileData.achievements.map(item => `<li>${item}</li>`).join('');

  const emailLink = document.getElementById('email-link');
  emailLink.href = `mailto:${profileData.contact.email}`;
  emailLink.textContent = profileData.contact.email;

  document.getElementById('mobile-number').textContent = profileData.contact.mobile;

  const facebookLink = document.getElementById('facebook-link');
  facebookLink.href = profileData.contact.facebookUrl;
  facebookLink.textContent = profileData.contact.facebook;
});
