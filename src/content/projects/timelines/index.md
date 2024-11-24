---
title: "You are your worst enemy. Timelines for Counterspell Singapore"
description: "Our submission for Counterspell SG"
date: "Nov 24 2024"
---

Yesterday was the first day of Counterspell; it was also the first time I actually learned how to use Pygame. Now, after roughly 3 hours of work, I present to you Timelines. 
## Timelines
![tl](/tl1.png)
![tl](/tl2.png)
![tl](/tl3.png)

The initial idea for timelines was to have two windows pop up when you run the file, one being the game, which is a platformer inspired by the genre, and the other being an interactive window where we're able to see the thoughts of the character as he experiences the levels with you. The whole premise for the story is that he's a wanderer at the end of time, running from the consequences of his own actions, which leads to a collapse of his timeline; he hopes that if he makes it to the very end of time, he'd seize to exist therefore undoing the damage he's caused and restoring his timeline. 

However, since we split up the work within our team, we ran into a series of issues when we tried to Frankenstein it all together, and unfortunately, we weren't able to ship our whole game in time. <b>HOWEVER,</b> our primary platformer is fully functional and you can try it out by downloading the following [repo](https://github.com/ashfelloff/timelines/tree/main), and running it on your IDE. Make sure you have the necessary packages for Python 3 and Pygame!
`pip3 install pygame`

On behalf of my team, I hope you enjoy it and consider voting for us. This was a gratifying experience; a little more than 24 hours ago, I didn't have the slightest clue about Pygame, and now to have written over 500 lines and created a whole game is such an amazing feeling. 

Just wanna mention our initial code for the second window that didn't end up working since my teammate put real effort into it.
`
mixer.init()
mixer.music.load('backgroundmusic/1.mp3')
mixer.music.play()

clock = pygame.time.Clock()
font = pygame.font.SysFont('Bauhaus 93', 70)
font_score = pygame.font.SysFont('Bauhaus 93', 30)

fps = 60

#game window

screen_width = 750
screen_height = 750  

player = pygame.Rect((300, 250, 50, 50))

screen = pygame.display.set_mode((screen_width, screen_height))

pygame.display.set_caption('Timelines')

tile_size = 37.5
game_over = 0
main_menu = True
level = 0
max_levels = 11
score = 0

white = (255, 255, 255)
blue = (12, 44, 60)

#image loader COME BACK
bg_img = pygame.image.load('img/wall.png')
restart_img = pygame.image.load('img/restart_btn.png')
start_img = pygame.image.load('img/start_btn.png')
exit_img = pygame.image.load('img/exit_btn.png')

# Define colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# List of texts to display
texts = [
    "I jump, not to survive, but to delay the inevitable.",
    "Every rooftop feels like another fleeting lie of safety.",
    "The world crumbles beneath me as I cling to what’s left.",
    "Each leap is a gamble I no longer care to win.",
    "The sky watches indifferently as I defy its pull.",
    "I run, not to escape, but to avoid standing still.",
    "Every handhold mocks me, questioning why I bother.",
    "My body moves forward; my mind stays trapped in the past.",
    "The horizon fades faster than my hope ever could.",
    "Each step forward feels like two steps closer to nowhere.",
    "The apocalypse chases me, but I’ve been running my whole life.",
    "I vault over ruins, the same way I avoid my reflection.",
    "Every move reminds me how fragile this existence really is.",
    "The sound of my breath echoes louder than my will to live.",
    "I scale walls built by those who never saw this coming.",
    "Each fall feels more inviting than the ground I leave behind.",
    "The teleporter looms ahead, a hollow promise of salvation.",
    "I’m not running toward life; I’m running away from memories.",
    "Every obstacle feels personal, as if the world knows my sins.",
    "I survive, but survival feels like the cruelest punishment.",
    "The ground shakes, but it’s nothing compared to my own instability.",
    "My shadow keeps up, the only constant in this collapse.",
    "I push forward because stopping feels too familiar.",
    "Each ledge I grab feels colder than the void inside me.",
    "I dodge falling debris, but not the thoughts that haunt me.",
    "Every heartbeat feels borrowed, as if I don’t deserve it.",
    "I land, not with triumph, but with the weight of failure.",
    "The world burns around me, but I’ve been scorched for years.",
    "I move forward because turning back is no longer an option.",
    "Every successful jump is another reminder I’m still here.",
    "I sprint toward the future, but it feels like a dead end.",
    "The wind carries me forward, as if it knows I can’t stop.",
    "Each wall I climb feels steeper than the last, like my regrets.",
    "The stars disappear, but I’ve grown used to the darkness.",
    "Every calculated move hides the chaos in my mind.",
    "The teleporter hums ahead, indifferent to my hesitation.",
    "Every misstep feels deliberate, like my subconscious wants me to fail.",
    "I leap across the void, a metaphor I wish I didn’t understand.",
    "The closer I get to escape, the heavier my body feels.",
    "I navigate destruction, wondering if it mirrors what’s inside me."
]

# Function to display text one letter at a time
def display_text(screen, font, text, y_pos):
    displayed_text = ""
    for char in text:
        displayed_text += char
        text_surf = font.render(displayed_text, True, BLACK)
        text_rect = text_surf.get_rect(topleft=(50, y_pos))
        screen.blit(text_surf, text_rect)
        pygame.display.flip()
        time.sleep(0.1)  # Adjust the speed of the animation here

# Function to run the text display on a second display
def text_display():
    screen = pygame.display.set_mode((800, 600))
    pygame.display.set_caption("Stacking Text Display")

    # Set up game clock
    clock = pygame.time.Clock()

    # Main game loop
    running = True
    last_text_time = time.time()
    interval = random.randint(5, 6)
    font = pygame.font.Font(None, 36)
    y_pos = 50
    displayed_texts = []

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Check if it's time to display a new text
        current_time = time.time()
        if current_time - last_text_time >= interval:
            text = random.choice(texts)
            displayed_texts.append((text, y_pos))
            y_pos += 40  # Move the next text down
            last_text_time = current_time
            interval = random.randint(5, 6)

        # Clear the screen
        screen.fill(WHITE)

        # Display all texts
        for text, pos in displayed_texts:
            text_surf = font.render(text, True, BLACK)
            text_rect = text_surf.get_rect(topleft=(50, pos))
            screen.blit(text_surf, text_rect)

        # Update the display
        pygame.display.flip()

        # Cap the frame rate
        clock.tick(30)

    pygame.quit()
    sys.exit()

text_process = multiprocessing.Process(target=text_display)
text_process.start()
`


