import pygame
from pygame.sprite import Sprite

class PowerUp(Sprite):
    """Power ups that players can pick up to improve bullet"""

    def __init__(self, ai_settings, screen):
        """Initialize power up at start position"""
        super(PowerUp, self).__init__()
        self.screen = screen
        self.ai_settings = ai_settings

        #Load the powerup image and set rect attribute
        self.image = pygame.image.load('images/star.png')
        self.rect = self.image.get_rect()

        #Position image from the top
        #self.rect.y = self.screen.rect

    def blitme(self):
        """Draw alien at current location"""
        self.screen.blit(self.image, self.rect)

