package edu.miu.inventory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;


@Controller
@RequestMapping("/items")
class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping
    public String listItems(Model model) {
        List<Item> items = itemRepository.findAll();
        model.addAttribute("items", items);
        System.out.println("$$$$$$$$ "+items);
        return "items";
    }

    @GetMapping({"/add", "/edit/{id}"})
    public String showAddOrEditForm(@PathVariable(required = false) Long id, Model model) {
        Item item = (id != null) ? itemRepository.findById(id).orElse(new Item()) : new Item();
        System.out.println(item);
        model.addAttribute("item", item);
        model.addAttribute("url", id==null?"/items/add":"/items/update/"+id);
        return "item-form";
    }

    @PostMapping({"/add", "/update/{id}"})
    public String saveOrUpdateItem(@PathVariable(required = false) Long id, @ModelAttribute Item item, RedirectAttributes redirectAttributes) {
        System.out.println("@@@@@@@@@@@@@@@@@@@@@@ "+id+item);
        itemRepository.save(item);
        redirectAttributes.addFlashAttribute("message", id == null ? "Item added successfully!" : "Item updated successfully!");
        return "redirect:/items";
    }

    @GetMapping("/delete/{id}")
    public String deleteItem(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        itemRepository.deleteById(id);
        redirectAttributes.addFlashAttribute("message", "Item deleted successfully!");
        return "redirect:/items";
    }
}