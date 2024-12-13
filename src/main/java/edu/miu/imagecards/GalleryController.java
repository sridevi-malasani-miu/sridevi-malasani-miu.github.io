package edu.miu.imagecards;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Controller
public class GalleryController {

    @Autowired
    private ImageRepository imageRepository;

    @GetMapping("/gallery")
    public String getGalleryPage(Model model) {
        List<Image> images = imageRepository.findAll();
        model.addAttribute("images", images);
        return "gallery";
    }

    @GetMapping("/gallery/delete/{id}")
    public String deleteGalleryPage(@PathVariable Long id) {
        System.out.println("hghgjgjgg   ");
        imageRepository.deleteById(id);
        return "redirect:/gallery";
    }

    @GetMapping("/gallery/sort")
    public String sortGallery(Model model) {
        List<Image> images = imageRepository.findAll();
        // Sort the images by firstName
        Collections.sort(images, new Comparator<Image>() {
            @Override
            public int compare(Image img1, Image img2) {
                return img1.getFirstName().compareTo(img2.getFirstName());
            }
        });
        model.addAttribute("images", images);
        return "gallery";
    }
}
