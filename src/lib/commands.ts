export const commands: { [key: string]: () => string } = {
  help: () => `
Available commands:
  help     - Show this help message
  whoami   - Display a brief introduction
  intro    - Show detailed information about me
  social   - Display social media links
  projects - View my projects
  clear    - Clear the terminal
  email    - Get my email contact
  banner   - Show the welcome banner
`,

  whoami: () => `A passionate tech enthusiast exploring the digital frontier.`,

  intro: () => `
Name: Vishnu
Age: 19
Interests: Linux, Video Editing, DSA
Description: A computer science student from India, passionate about technology and small projects.
`,

  social: () => `
Find me online:
  YouTube  : technicalvishnu
  Twitter  : vishnu2k04
  LinkedIn : techvishnu
  Instagram: vishnu2ko4
  GitHub   : techvishnu
  Reddit   : OnlyMemer420
`,

  projects: () => "Coming Soon...",

  email: () => {
    window.location.href = "mailto:forrest@fkcodes.com";
    return "Opening mail client...";
  },

  clear: () => {
    // This will be handled differently in the Terminal component
    return "";
  },

  banner: () => `
██╗   ██╗██╗███████╗██╗  ██╗███╗   ██╗██╗   ██╗
██║   ██║██║██╔════╝██║  ██║████╗  ██║██║   ██║
██║   ██║██║███████╗███████║██╔██╗ ██║██║   ██║
╚██╗ ██╔╝██║╚════██║██╔══██║██║╚██╗██║██║   ██║
 ╚████╔╝ ██║███████║██║  ██║██║ ╚████║╚██████╔╝
  ╚═══╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
                                                
Welcome to my terminal portfolio! Type 'help' to see available commands.
`,
};