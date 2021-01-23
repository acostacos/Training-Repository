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

    #Initialize ship, group of bullets, and group of aliens
    ship = Ship(screen, ai_settings)
    bullets = Group()
    aliens = Group()

    #Create a fleet of aliens
    gf.create_fleet(ai_settings, screen, ship, aliens)

    #Start the main loop for the game
    while True:
        #Check for game events
        gf.check_events(ai_settings, screen, ship, bullets)

        #Update ship, bullet, and alien status
        ship.update()
        gf.update_bullets(ai_settings, screen, ship, aliens, bullets)
        gf.update_aliens(ai_settings, ship, aliens)

        #Update game screen
        gf.update_screen(ai_settings, screen, ship, aliens, bullets)

run_game()
