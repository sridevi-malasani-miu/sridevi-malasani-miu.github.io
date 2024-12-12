package edu.miu.preview;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/form")
class UserInputController {

    @Autowired
    private UserInputRepository userInputRepository;

    @GetMapping
    public String showForm(@ModelAttribute UserInput userInput, Model model) {
        System.out.println("########"+userInput+ " &&&&&&&&&&&& "+ model.getAttribute("message"));
        model.addAttribute("userInput", userInput.getId()==null?new UserInput():userInput);
        model.addAttribute("mode", "add");
        model.addAttribute("countries", Arrays.asList("USA", "Canada", "India", "UK"));
        model.addAttribute("interests", Arrays.asList("Sports", "Music", "Reading", "Traveling"));
        // model.addAttribute("message", message   );
        return "form";
    }

    @PostMapping("/preview")
    public String previewInput(@ModelAttribute UserInput userInput, Model model) {
        model.addAttribute("userInput", userInput);
        return "form";
    }

    @PostMapping("/save")
    public String saveInput(@ModelAttribute UserInput userInput, RedirectAttributes redirectAttributes) {
        System.out.println("**************************"+userInput);
        userInputRepository.save(userInput);
        redirectAttributes.addFlashAttribute("userInput",userInput);
        redirectAttributes.addFlashAttribute("message","Data saved successfully!");
        return "redirect:/form";
    }
}
 
