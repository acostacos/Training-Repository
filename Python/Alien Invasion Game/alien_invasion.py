import pygame
from pygame.sprite import Group
from settings import Settings
from ship import Ship
import game_functions as gf

def run_game():
    #Initialize pygame, settings, and screen object
    pygame.init()
    ai_settings = Settings()
    screen = pygame.display.set_mode((ai_settings.screen_width, ai_settings.screen_height))
    pygame.display.set_caption("Alien Invasion")

    #Initialize ship
    ship = Ship(screen, ai_settings)
    # Initialize group to store bullets
    bullets = Group()

    #Start the main loop for the game
    while True:
        #Check for game events
        gf.check_events(ai_settings, screen, ship, bullets)

        #Update ship and bullet status
        ship.update()
        gf.update_bullets(bullets)

        #Update game screen
        gf.update_screen(ai_settings, screen, ship, bullets)

run_game()
